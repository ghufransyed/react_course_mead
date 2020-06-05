/*
describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})

describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(false)
    })
})*/

describe('Initial State', () => {
    it('Checks initial state', () => {
        cy.visit('http://localhost:8080')
        cy.clearLocalStorage()
        cy.contains('Indecision')
        cy.contains('Put your life in the hands of a computer')
        cy.contains('button','What should I do')
        cy.get('#what-do').should('be.disabled')
        cy.contains('button','Remove All')
        cy.get('#remove-all').should('be.disabled')
        cy.contains('p','Please add an option to get started!')
        cy.contains('button', "Add Option")
        cy.get('#input-addOption')
            .invoke('attr','placeholder' )
            .should('equal', 'Enter option here')
        cy.get('#button-addOption').should('not.be.disabled')
    })
})

const input1 = 'one'
const input2 = 'two'
const input3 = 'three'

describe('Add Option', () => {
    it('New option is rendered', () => {
        cy.visit('http://localhost:8080')
        cy.clearLocalStorage()
        cy.get('#input-addOption').type(input1)
        cy.get('#form-addOption').submit()
        cy.get('#input-addOption')
            .should('be.empty')
        cy.get('#get-started-msg').should('not.exist')
        cy.contains(input1)
    })
})


describe('Add Empty and duplicate Option', () => {
    it('Gives error messages', () => {
        cy.visit('http://localhost:8080')
        cy.clearLocalStorage()
        cy.get('#form-addOption').submit()
        cy.contains('Enter valid value to add item')
        cy.get('#input-addOption').type(input1)
        cy.get('#form-addOption').submit()
        cy.contains(input1)
        cy.get('#input-addOption').type(input1)
        cy.get('#form-addOption').submit()
        cy.contains('This item already exists')
        cy.get('#input-addOption')
            .should('have.value', input1)
        cy.get('#input-addOption').clear()
        cy.get('#input-addOption').type(input2)
        cy.get('#form-addOption').submit()
        cy.contains(input1)
        cy.contains(input2)
        cy.get('#error-msg-addOption')
            .should('not.exist')
        cy.contains('Enter valid value to add item')
            .should('not.be.true')

    })
})

describe('Test options', () => {
    it('every option has a remove button', () => {
        cy.visit('http://localhost:8080')
        cy.clearLocalStorage()
        cy.get('#input-addOption').type(input1)
        cy.get('#form-addOption').submit()
        cy.contains(input1)
        cy.get('#input-addOption').type(input2)
        cy.get('#form-addOption').submit()
        cy.contains(input1)
        cy.contains(input2)
        cy.get('#input-addOption').type(input3)
        cy.get('#form-addOption').submit()
        cy.contains(input1)
        cy.contains(input2)
        cy.contains(input3)

        cy.get('.option').each((option,index,list) => {
            cy.wrap(option)
                .get('.option-remove-btn')
                .should('exist')
            cy.wrap(option)
                .contains('Remove')
        })


    })

    it('each option can be removed', () => {
        cy.visit('http://localhost:8080')
        cy.clearLocalStorage()
        cy.get('#input-addOption').type(input1)
        cy.get('#form-addOption').submit()
        cy.contains(input1)
        cy.get('#input-addOption').type(input2)
        cy.get('#form-addOption').submit()
        cy.contains(input1)
        cy.contains(input2)
        cy.get('#input-addOption').type(input3)
        cy.get('#form-addOption').submit()
        cy.contains(input1)
        cy.contains(input2)
        cy.contains(input3)

        cy.get('#option-1').contains(input2)
        cy.get('#btn-1').click()
        cy.contains(input2).should('not.be.true')

    })



    it('"Remove all" works', () => {
        cy.visit('http://localhost:8080')
        cy.clearLocalStorage()
        cy.get('#input-addOption').type(input1)
        cy.get('#form-addOption').submit()
        cy.contains(input1)
        cy.get('#input-addOption').type(input2)
        cy.get('#form-addOption').submit()
        cy.contains(input1)
        cy.contains(input2)
        cy.get('#input-addOption').type(input3)
        cy.get('#form-addOption').submit()
        cy.contains(input1)
        cy.contains(input2)
        cy.contains(input3)

        cy.get('#remove-all').click()
        cy.contains('Please add an option to get started!')
        cy.get('.option').should('not.exist')

    })



})


