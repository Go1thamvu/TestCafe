import { Selector } from 'testcafe';
import config from '../config';
import { waitForReact, ReactSelector } from 'testcafe-react-selectors';


const env = process.env.ENV;
console.log(env);

fixture `Test React`
    .page(`${config[env].reactUrl}`)
    .beforeEach(async t => {
        await waitForReact(5000, t);
    });

const cherryImage = ReactSelector('img').withAttribute("alt", "Cherry");
const orangeImage = ReactSelector('img').withAttribute("alt", "Orange")
const nutsImage = ReactSelector('img').withAttribute("alt", "Nuts")
const stwarberryImage = ReactSelector('img').withAttribute("alt", "Strawberry")

test("First React Test Case", async t => {
    await cherryImage();
    await orangeImage();
    await nutsImage();
    await stwarberryImage();

    await t
        .hover(cherryImage)
        .click(cherryImage)
        .hover(orangeImage)
        .click(orangeImage)
        .hover(nutsImage)
        .click(nutsImage)
        .hover(stwarberryImage)
        .click(stwarberryImage)   
        .expect(ReactSelector("th").withProps({ children: "Price" }).exists).ok()
        .expect(ReactSelector("th").withProps({ children: "Colors" }).exists).ok()
        .expect(ReactSelector("th").withProps({ children: "Condition" }).exists).ok()
        ;
})
