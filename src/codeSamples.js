function foo() {
    console.log(1);
}

function callToExternalCode(code) {

    // do something here...

    code();

    // do something there...
}

function normalCode() {
    return 'nice name';
}

function failingCode() {
    throw new Error('Oops');
}

export { foo, callToExternalCode, normalCode, failingCode }
