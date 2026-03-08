function validateForm(formData) {
    let isValid = true;
    
    resetErrors();
    
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    if (!formData.username || !usernameRegex.test(formData.username)) {
        showError('username', 'Имя должно содержать 3-20 символов (буквы, цифры, _)');
        isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
        showError('email', 'Введите корректный email');
        isValid = false;
    }
    
    if (!formData.password || formData.password.length < 6) {
        showError('password', 'Пароль должен содержать минимум 6 символов');
        isValid = false;
    }
    
    if (formData.password !== formData.confirmPassword) {
        showError('confirmPassword', 'Пароли не совпадают');
        isValid = false;
    }
    
    if (!formData.agreeTerms) {
        showError('agree', 'Необходимо согласиться с условиями');
        isValid = false;
    }
    
    return isValid;
}

function showError(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + 'Error');
    
    if (field) {
        field.classList.add('is-invalid');
        if (errorDiv) errorDiv.textContent = errorMessage;
    } else if (fieldId === 'agree') {
        // Особая обработка для чекбокса
        const agreeCheckbox = document.getElementById('agreeTerms');
        const agreeError = document.getElementById('agreeError');
        agreeCheckbox.classList.add('is-invalid');
        agreeError.textContent = errorMessage;
    }
}

function resetErrors() {
    const fields = ['username', 'email', 'password', 'confirmPassword'];
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const errorDiv = document.getElementById(fieldId + 'Error');
        
        if (field) {
            field.classList.remove('is-invalid');
            if (errorDiv) errorDiv.textContent = '';
        }
    });
    
    const agreeCheckbox = document.getElementById('agreeTerms');
    const agreeError = document.getElementById('agreeError');
    agreeCheckbox.classList.remove('is-invalid');
    agreeError.textContent = '';
}