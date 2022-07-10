function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async function init() {
  var vacancies = document.querySelectorAll('[data-qa="vacancy-serp__vacancy_response"]');
  var i = 0;

  while (i <= vacancies.length) {
    vacancies[i].click();

    await delay(1000);

    var resume = document.querySelector('#resume_ПОДСТАВЛЯЕМ_ИДЕНТИФИКАТОР_РЕЗЮМЕ');
    var message = document.querySelector('[data-qa="vacancy-response-letter-toggle"]');

    resume.click();
    message.click();

    await delay(1000);

    var vacancy = document.querySelector(
      '.bloko-modal-header_outlined > div'
    ).textContent;
    var vacancyName = vacancy.slice(1, vacancy.length - 1);
    var messageArea = document.querySelector(
      '[data-qa="vacancy-response-popup-form-letter-input"]'
    );

    messageArea.value = `Добрый день!

Меня зовут ПОДСТАВЛЯЕМ_ИМЯ. Меня заинтересовала предложенная Вами вакансия ${vacancyName}.

ПОДСТАВЛЯЕМ_СП`;

    var evt = document.createEvent('HTMLEvents');
    evt.initEvent('change', true, true);
    messageArea.dispatchEvent(evt);

    var btnSubmit = document.querySelector('[data-qa="vacancy-response-submit-popup"]');
    btnSubmit.click();

    i++;

    await delay(1000);
  }
})();