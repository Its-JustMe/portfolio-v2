/** Função que atualiza minha idade */
export function updateAge() {
    const birth_year = 2006;
    const date = new Date();
    const current_year = date.getFullYear();
    return current_year - birth_year;
}
