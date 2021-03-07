import "whatwg-fetch";

window.contactForm = () => {

    return {
        endPoint: '',
        notification: '',
        failure: false,
        loading: false,
        submitted: false,
        formData: {
            first_name: '',
            last_name: '',
            company: '',
            email: '',
            phone: '',
            message: '',
            domain: window.location.hostname
        },

        validateForm() {
            if (this.formIsValid()) this.submitForm()
        },

        formIsValid() {
            const accepted = document.getElementById('accept')

            if (accepted.getAttribute('aria-checked') !== "true") {
                alert("To submit the form, you must read & agree to our Privacy Policy.");
                accepted.focus();
                return false;
            }

            return true;
        },

        submitForm() {
            this.loading = true;

            window.fetch(this.endPoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.formData)
            })
                .then(this.handleErrors)
                .then(response => {
                    console.log("ok")

                    this.notification = 'Your message was forwarded, we will get back to you as soon as possible.'
                })
                .catch(error => {
                    console.log(error)

                    this.failure = true
                    this.notification = error.message
                })
                .finally(() => {
                    this.loading = false;
                    this.submitted = true
                })
        },

        handleErrors(response) {
            if (response.status !== 200) {
                throw Error('Something went awfully wrong, please wait a moment and try again.');
            }

            return response;
        }
    }
}