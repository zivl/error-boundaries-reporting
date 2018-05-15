import errorBoundaries from 'wix-error-boundaries';

const MY_SCOPE = 'myCodeZone';
const OTHER_SCOPE = 'otherCodeZone';

function reportToSystem(error) {
    console.warn(`reported about error ${error.message}`)
}


function fireErrorEvent(error) {
    console.error(`printing error ${error.message}`)
}

const errorHandler = (error, scope) => {
    switch(scope){
        case MY_SCOPE: // do something with my error
            reportToSystem(error)
            break;
        case OTHER_SCOPE: // not my scope so let's do something else
            fireErrorEvent(error)
            break;
        default:
            throw error
    }
};

const {myCodeZone, otherCodeZone} = errorBoundaries({
	scopes: [MY_SCOPE, OTHER_SCOPE],
	errorHandler
})

export { myCodeZone, otherCodeZone };
