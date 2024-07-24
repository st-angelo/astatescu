import { setLibs } from '../../scripts/utils.js';

const miloLibs = setLibs('/libs');

export default async function init(el) {
  const { createTag } = await import(`${miloLibs}/utils/utils.js`);

  const form = createTag('form', { class: 'test-form' });

  const firstNameLabel = createTag('label', { class: 'test-form-label' });
  const firstNameInput = createTag('input', { class: 'test-form-input' });

  form.append(firstNameLabel, firstNameInput);

  el.append(form);
}
