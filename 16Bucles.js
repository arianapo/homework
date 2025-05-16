function saludoidioma(idioma) {
    switch (idioma) {
        case 'es':
            return 'Hola';
        case 'en':
            return 'Hello';
        case 'fr':
            return 'Bonjour';
        case 'ma':
            return 'Ni Hao';
        case 'german':
            return 'Guten Tag';

        default:
            return 'Idioma no soportado';
    }
}