import React, { useRef } from 'react';
import { Button, Input } from 'src/components';

export const AddWord = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      const nameEn = formRef.current['name_en'].value;
      console.log(nameEn);
    }
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <Input name="name_en" type="text" />
      <Input name="name_ka" type="text" />
      <Button type="submit">Add word</Button>
    </form>
  );
};
