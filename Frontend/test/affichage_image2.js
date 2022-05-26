jest.mock('../src/assets/Composants/GetImage.js');

const {AffichageImage} = require('../src/assets/Composants/affichage_image2');

test('should get images Id', () => {
    console.log(AffichageImage());
    AffichageImage().then(Image =>{
        console.log(Image);
        expect(Image.querySelector("[id='image']")).toBe(1);
    })
})
