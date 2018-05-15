import errorBoundaries from 'wix-error-boundaries';

const MY_SCOPE = 'myCodeZone';
const OTHER_SCOPE = 'otherCodeZone';

function reportToSystem(Raven, error) {
    console.warn(`reported about error ${error.message}`)
    Raven.captureException(error)
}


function fireErrorEvent(error) {
    console.error(`printing error ${error.message}`)
}

const errorHandler = (Raven, error, scope) => {
    switch(scope){
        case MY_SCOPE: // do something with my error
            reportToSystem(Raven, error)
            break;
        case OTHER_SCOPE: // not my scope so let's do something else
            fireErrorEvent(error)
            break;
        default:
            throw error
    }
};

export default (Raven) => errorBoundaries({
	scopes: [MY_SCOPE, OTHER_SCOPE],
	errorHandler: errorHandler.bind(null, Raven)
});
