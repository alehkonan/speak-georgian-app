import { render } from '@testing-library/react';
import { Switch } from '.';

describe('<Switch />', () => {
  it('should render component', () => {
    const element = render(<Switch />);

    expect(element.asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <button
          aria-checked="false"
          class="relative inline-flex h-7 w-14 items-center rounded-full bg-gray-200"
          data-headlessui-state=""
          id="headlessui-switch-:r0:"
          role="switch"
          tabindex="0"
          type="button"
        >
          <span
            class="inline-block h-5 w-5 transform rounded-full transition translate-x-1 bg-white"
          />
        </button>
      </DocumentFragment>
    `);
  });
});
