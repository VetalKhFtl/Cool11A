const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';

    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Відкрити меню' : 'Закрити меню');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Відкрити меню');
      navigation.classList.remove('is-open');
    });
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const consultationForm = document.querySelector('#consultation-form');

if (consultationForm) {
  consultationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(consultationForm);
    const subject = `Консультація з ${formData.get('service')}`;
    const message = [
      `Ім'я: ${formData.get('name')}`,
      `Контакт: ${formData.get('contact')}`,
      `Тема: ${formData.get('service')}`,
      `Зручна дата: ${formData.get('date') || 'не вказано'}`,
      '',
      'Деталі запиту:',
      formData.get('details'),
    ].join('\n');

    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  });
}
