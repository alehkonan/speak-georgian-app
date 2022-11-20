import React, { useRef } from 'react';

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
      <input name="name_en" type="text" />
      <input name="name_ka" type="text" />
      <button type="submit">Add word</button>
    </form>
  );
};
