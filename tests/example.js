import { Selector } from 'testcafe';
import config from '../config';

const env = process.env.ENV;
console.log(env);

fixture `Test Example`
    .page(`${config[env].exampleUrl}/testcafe/example`);

test('My first test', async t => {
    const fullName = 'Tham Vu';
    await t
        .typeText('#developer-name', fullName)
        .click('#windows')
        .click('#remote-testing')
        .click('#reusing-js-code')
        .click('#background-parallel-testing')
        .click('#continuous-integration-embedding')
        .click('#traffic-markup-analysis')
        .click('#tried-test-cafe')
        .dragToElement('.ui-slider-handle', '.slider-value:nth-child(9)')
        .click('#preferred-interface')
        .click('#preferred-interface option:first-child')
        .click('#submit-button');

    const articleHeader = await Selector('.result-content').find('h1');
    let headerText = await articleHeader.innerText;

    await t
        .expect(headerText).eql('Thank you, ' + fullName + '!');
})
