/** Função que atualiza minha idade */
export function updateAge (): number {
    const birth_year: number = 2006;
    const date: Date = new Date();
    const current_year: number = date.getFullYear();

    return current_year - birth_year;
}