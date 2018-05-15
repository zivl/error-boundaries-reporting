function foo() {
    console.log(1);
}

function callToExternalCode(code) {

    // do something here...

    code();

    // do something there...
}

function failingCode() {
    throw new Error('Oops');
}

export { foo, callToExternalCode, failingCode }
