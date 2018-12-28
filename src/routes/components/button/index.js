import { Card, Icon, Divider, Button } from '@uiw/core';
import Markdown from '../../../components/Markdown';


export default class Page extends Markdown {
  path = 'src/routes/components/button/index.md';
  dependencies = { Card, Icon, Button, Divider };
  async renderPage() {
    const md = await import('../../../../packages/core/src/button/index.md');
    return md.default || md;
  }
}
