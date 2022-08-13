import React, { useEffect, useState } from 'react';
import Input, { InputProps } from '@uiw/react-input';
import Popover, { PopoverProps } from '@uiw/react-popover';
import DatePicker, { DatePickerProps } from '@uiw/react-date-picker';
import { Close } from '@uiw/icons/lib/Close';
import { IProps } from '@uiw/utils';
import formatter from '@uiw/formatter';
import {
  DateInputIcon,
  DateInputIconStyleWarp,
  DateInputStyleDatePickerPopover,
  DateInputStyleBase,
} from './style/index';
export * from './style';
export * from './DateInputRange';

export interface DateInputProps extends IProps, Omit<InputProps, 'onChange' | 'value'> {
  popoverProps?: PopoverProps;
  datePickerProps?: DatePickerProps;
  value?: Date | string;
  format?: string;
  allowClear?: boolean;
  onChange?: (selectedDate?: Date) => void;
  autoClose?: boolean;
}

export default function DateInput(props: DateInputProps) {
  const {
    prefixCls = 'w-dateinput',
    className,
    popoverProps,
    datePickerProps,
    allowClear = true,
    autoClose = false,
    format = 'YYYY/MM/DD',
    onChange,
    ...inputProps
  } = props;
  const [date, setDate] = useState(props.value);

  const value = date || '';
  inputProps.value = typeof value === 'string' ? value : formatter(format, value);

  useEffect(() => {
    if (props.value !== date) {
      setDate(props.value);
    }
  }, [props.value]);

  function handleChange(cdate?: Date) {
    autoClose && setIsOpen(false);
    setDate(cdate);
    onChange && onChange(cdate);
  }
  if (allowClear && inputProps.value) {
    inputProps.addonAfter = (
      <DateInputIconStyleWarp closebtn className={`${prefixCls}-close-btn`} onClick={() => handleChange(undefined)}>
        <DateInputIcon as={Close} />
      </DateInputIconStyleWarp>
    );
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      trigger="focus"
      placement="bottomLeft"
      autoAdjustOverflow
      isOpen={isOpen}
      onVisibleChange={(open) => setIsOpen(open)}
      {...popoverProps}
      content={
        <DateInputStyleDatePickerPopover
          as={DatePicker}
          date={(value && new Date(value)) || undefined}
          className={`${prefixCls}-popover`}
          {...datePickerProps}
          onChange={(selectedDate: Date | undefined) => handleChange(selectedDate!)}
        />
      }
    >
      <DateInputStyleBase
        as={Input}
        placeholder="请选择日期"
        readOnly
        {...(inputProps as InputProps)}
        className={[prefixCls, className].filter(Boolean).join(' ').trim()}
      />
    </Popover>
  );
}
