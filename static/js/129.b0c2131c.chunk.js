(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[129],{1358:function(n,e,t){"use strict";t.r(e),e.default="SearchSelect \u641c\u7d22\u9009\u62e9\u5668\n===\n\n\u641c\u7d22\u9009\u62e9\u5668\n\n```jsx\nimport { SearchSelect } from 'uiw';\n// or\nimport SearchSelect from '@uiw/react-search-select';\n```\n\n## \u57fa\u7840\u793a\u4f8b\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { SearchSelect } from 'uiw';\n\nconst Demo = () => {\n  const [option, setOption] = React.useState([]);\n  const [loading, setLoading] = React.useState(false);\n  const [value, setValue] = React.useState(undefined);\n  function handleSearch(e) {\n    setLoading(true)\n    setTimeout(() =>  {\n      setOption([\n        { label: 'a', value: 2 },\n        { label: 'aa', value: 3 },\n        { label: 'aaa', value: 4 },\n      ]);\n      setLoading(false);\n    }, 2000);\n  }\n  return(\n    <SearchSelect\n      style={{ maxWidth: 200 }}\n      showSearch={true}\n      allowClear\n      value={value}\n      disabled={false}\n      placeholder=\"\u8bf7\u8f93\u5165\u9009\u62e9\"\n      onSearch={handleSearch}\n      loading={loading}\n      option={option}\n      onChange={(value) => setValue(value)}\n    />\n  );\n};\nReactDOM.render(<Demo />, _mount_);\n```\n\n### \u5728\u8868\u5355\u4e2d\u4f7f\u7528\n\n\u5728 [`<Form />`](#/components/form) \u8868\u5355\u4e2d\u5e94\u7528 `<SearchSelect />` \u7ec4\u4ef6\u3002\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true&noScroll=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport { Form, Row, Col, SearchSelect, Button, Notify } from 'uiw';\n\nconst Demo = () => {\n  const [option, setOption] = React.useState([]);\n  const [loading, setLoading] = React.useState(false);\n  function handleSearch(e) {\n    setLoading(true)\n    setTimeout(() =>  {\n      setOption([\n        { label: 'a', value: 2 },\n        { label: 'aa', value: 3 },\n        { label: 'aaa', value: 4 },\n      ]);\n      setLoading(false);\n    }, 2000);\n  }\n\n  return (\n    <div>\n      <Form\n        onSubmitError={(error) => {\n          if (error.filed) {\n            return { ...error.filed };\n          }\n          return null;\n        }}\n        onSubmit={({initial, current}) => {\n          const errorObj = {};\n          if (!current.selectField) {\n            errorObj.selectField = '\u9ed8\u8ba4\u9700\u8981\u9009\u62e9\u5185\u5bb9\uff0c\u9009\u62e9\u5165\u5185\u5bb9';\n          }\n          if(Object.keys(errorObj).length > 0) {\n            const err = new Error();\n            err.filed = errorObj;\n            Notify.error({ title: '\u63d0\u4ea4\u5931\u8d25\uff01', description: '\u8bf7\u786e\u8ba4\u63d0\u4ea4\u8868\u5355\u662f\u5426\u6b63\u786e\uff01' });\n            throw err;\n          }\n          Notify.success({\n            title: '\u63d0\u4ea4\u6210\u529f\uff01',\n            description: `\u8868\u5355\u63d0\u4ea4\u6210\u529f\uff0c\u9009\u62e9\u503c\u4e3a\uff1a${current.selectField}\uff0c\u5c06\u81ea\u52a8\u586b\u5145\u521d\u59cb\u5316\u503c\uff01`,\n          });\n        }}\n        fields={{\n          selectField: {\n            children: (\n              <SearchSelect\n                showSearch={true}\n                allowClear\n                disabled={false}\n                placeholder=\"\u8bf7\u8f93\u5165\u9009\u62e9\"\n                onSearch={handleSearch}\n                option={option}\n                loading={loading}\n              />\n            )\n          },\n        }}\n      >\n        {({ fields, state, canSubmit }) => {\n          return (\n            <div>\n              <Row>\n                <Col fixed>{fields.selectField}</Col>\n              </Row>\n              <Row>\n                <Col fixed>\n                  <Button disabled={!canSubmit()} type=\"primary\" htmlType=\"submit\">\u63d0\u4ea4</Button>\n                </Col>\n              </Row>\n              <Row>\n                <Col>\n                  <pre style={{ padding: 10, marginTop: 10 }}>\n                    {JSON.stringify(state.current, null, 2)}\n                  </pre>\n                </Col>\n              </Row>\n            </div>\n          )\n        }}\n      </Form>\n    </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n## Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| allowClear | \u652f\u6301\u6e05\u9664 | Boolean | `false` |\n| disabled | \u7981\u7528\u9009\u62e9\u5668 | Boolean | `false` |\n| defaultValue | \u6307\u5b9a\u9ed8\u8ba4\u9009\u4e2d\u7684\u6761\u76ee | String/Number | - |\n| value | \u6307\u5b9a\u9009\u4e2d\u7684\u6761\u76ee\u7684\u503c | String/Number | - |\n| placeholder | \u9009\u62e9\u6846\u9ed8\u8ba4\u6587\u5b57 | String | - |\n| showSearch | \u4f7f\u5355\u9009\u6a21\u5f0f\u53ef\u641c\u7d22 | Boolean | - |\n| size | \u9009\u62e9\u6846\u5c3a\u5bf8 | Enum{`large`, `default`, `small` } | `default` |\n| onChange | \u9009\u4e2d option\uff0c\u6216 input \u7684 value\uff0c\u8c03\u7528\u6b64\u51fd\u6570 | `function(value, option:Option/Array<Option>)` | - |\n| onSearch | \u6587\u672c\u6846\u503c\u53d8\u5316\u65f6\u56de\u8c03 | `function(value: String)` | - |\n| onSelect | \u88ab\u9009\u4e2d\u65f6\u8c03\u7528\uff0c\u53c2\u6570\u4e3a\u9009\u4e2d\u9879\u7684 value | `function(value: String/Number )` | - |\n| loading | \u52a0\u8f7d\u4e2d\u72b6\u6001 | Boolean | false |\n"}}]);
//# sourceMappingURL=129.b0c2131c.chunk.js.map