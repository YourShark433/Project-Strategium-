function logFormData(formData) {
    console.log('%c=== НОВАЯ РЕГИСТРАЦИЯ ===', 'color: green; font-weight: bold');
    console.log('Время:', new Date().toLocaleString());
    console.log('Данные пользователя:');
    console.log('  ├─ Имя пользователя:', formData.username);
    console.log('  ├─ Email:', formData.email);
    console.log('  ├─ Пароль:', '•'.repeat(formData.password.length), '(скрыт)');
    console.log('  └─ Согласие с условиями:', formData.agreeTerms ? 'Да' : 'Нет');
    console.log('%c=========================', 'color: green');
}

function logError(errorType, details) {
    console.log('%c ОШИБКА ВАЛИДАЦИИ', 'color: red; font-weight: bold');
    console.log('  └─ Причина:', details);
    console.log('  └─ Время:', new Date().toLocaleString());
}

function logSuccess(username) {
    console.log('%c РЕГИСТРАЦИЯ УСПЕШНА!', 'color: green; font-size: 14px');
    console.log('  └─ Пользователь', username, 'успешно зарегистрирован');
}