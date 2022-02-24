describe('Quotes App', () => {
    beforeEach(() => {
        cy.visit('http://loalhost:1234')
    })
})

const nameInput = () => cy.get('input[name=name]')
const emailInput = () => cy.get('input[name=email]')
const passwordInput = () => cy.get('input[name=password]')
const submitBtn = () => cy.get('button[id="submitBtn"]')

it('make sure tests work', () => {
    nameInput().should('exist')
    emailInput().should('exist')
    passwordInput().should('exist')
    submitBtn().should('exist')
})

describe('Filling out the inputs', () => {
    it('can navigate to site', () => {
        cy.url().should('include', 'localhost')
    })
    it('user can type in the inputs', () => {
        nameInput()
            .should('have.value')
            .type('Victor')
            .should('have.value', 'Victor')

        emailInput()
            .should('have.value')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')

        passwordInput()
            .should('have.value')
            .type('1234')
            .should('have.value', '1234')
    })
    it('can user submit form data', () => {
        submitBtn().should('have.submit')
    })
})