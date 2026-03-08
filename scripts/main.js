document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('registerBtn');
    const form = document.getElementById('registerForm');
    const modalElement = document.getElementById('registerModal');
    
    const modal = new bootstrap.Modal(modalElement);
    

    registerBtn.addEventListener('click', function() {
        const agreeTerms = document.getElementById('agreeTerms').checked;
        
        const formData = {
            username: document.getElementById('username').value.trim(),
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value,
            confirmPassword: document.getElementById('confirmPassword').value,
            agreeTerms: agreeTerms
        };
        

        if (validateForm(formData)) {
            logFormData(formData);
            logSuccess(formData.username);
            
            const newUser = {
                id: Date.now(),
                username: formData.username,
                email: formData.email,
                registeredAt: new Date().toISOString()
            };
            
            console.log('📦 Данные для отправки на сервер:', newUser);
            
            alert(` Регистрация успешна!\nДобро пожаловать, ${formData.username}!`);
            
            form.reset();
            resetErrors();
            
            modal.hide();
        } else {
            logError('Ошибка валидации', 'Проверьте правильность заполнения всех полей');
        }
    });
    
    modalElement.addEventListener('show.bs.modal', function() {
        resetErrors();
        console.log(' Открыта форма регистрации');
    });
    
    modalElement.addEventListener('hidden.bs.modal', function() {
        console.log(' Форма регистрации закрыта');
    });
    
    document.getElementById('password').addEventListener('input', function() {
        const confirmField = document.getElementById('confirmPassword');
        if (confirmField.value) {
            if (this.value !== confirmField.value) {
                confirmField.classList.add('is-invalid');
                document.getElementById('confirmPasswordError').textContent = 'Пароли не совпадают';
            } else {
                confirmField.classList.remove('is-invalid');
                document.getElementById('confirmPasswordError').textContent = '';
            }
        }
    });
    
    document.getElementById('confirmPassword').addEventListener('input', function() {
        const passwordField = document.getElementById('password');
        if (this.value !== passwordField.value) {
            this.classList.add('is-invalid');
            document.getElementById('confirmPasswordError').textContent = 'Пароли не совпадают';
        } else {
            this.classList.remove('is-invalid');
            document.getElementById('confirmPasswordError').textContent = '';
        }
    });
});