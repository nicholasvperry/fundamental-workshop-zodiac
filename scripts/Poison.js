export const Poison = (poison) =>{
    return `
    <section class="poisonCard">
    <div class="poisonId">ID: ${poison.id}</div>
    <div class="poisonName">Name: ${poison.name}</div>
    <div class="poisonMascot">Mascot: ${poison.mascot}</div>
    <div class="poisonDates">Dates: ${poison.dates}</div>
    <div class="poisonElement">Element: ${poison.element}</div>
    <div class="poisonWvAnimal">WV Animal: ${poison.wvAnimal}</div><br>
</section>
    
    
    `
}
