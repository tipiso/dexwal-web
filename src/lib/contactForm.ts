import { sendContact } from '../lib/products';
import { showToast } from '../lib/toast';

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const messageTextarea = document.querySelector('textarea[data-max-length]');
  const charCountElement = document.getElementById('charCount');
  const submitButton = document.getElementById('submitBtn');

  // Character counter
  if (messageTextarea && charCountElement) {
    messageTextarea.addEventListener('input', function () {
      charCountElement.textContent = this.value.length;
    });
  }

  // Form submission
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      if (!submitButton) return;

      // Extract values from form fields
      const formData = new FormData(contactForm as HTMLFormElement);

      const dto = {
        name: formData.get('name')?.toString() || '',
        phone: formData.get('phone')?.toString() || '',
        email: formData.get('email')?.toString() || '',
        message: formData.get('message')?.toString() || '',
      };

      // Set loading state
      (submitButton as HTMLButtonElement).disabled = true;
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Sending...';

      let result;
      try {
        result = await sendContact(dto);
        showToast(result);
        (contactForm as HTMLFormElement).reset();
        if (charCountElement) charCountElement.textContent = '0';
      } catch (err) {
        showToast(result ?? '', 'error');
      } finally {
        // Reset button state
        (submitButton  as HTMLButtonElement).disabled = false;
        submitButton.textContent = originalText;
      }
    });
  }
});