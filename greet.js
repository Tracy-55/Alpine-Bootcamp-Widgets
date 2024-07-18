function greet(name, language = 'en') {
    switch (language) {
        case 'es':
            return `Hola, ${name}!`;
        case 'fr':
            return `Bonjour, ${name}!`;
        default:
            return `Hello, ${name}!`;
    }
}

