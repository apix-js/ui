const isScriptLoaded = () => {
    return !!document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.2.67/pdf.min.mjs"]')
}

export { isScriptLoaded }