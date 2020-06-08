const target_url = 'http://localhost:8081'
const input1 = 'one'
const input2 = 'two'
const input3 = 'three'
const inputs = [input1,input2,input3]


describe('Initial State', () => {
    it('Checks initial state', () => {
        cy.visit(target_url)
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
            .should('equal', 'Enter option text here')
        cy.get('#button-addOption').should('not.be.disabled')
    })
})


describe('Add Option', () => {
    it('New option is rendered', () => {
        cy.visit(target_url)
        cy.clearLocalStorage()
        cy.visit(target_url)
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
        cy.visit(target_url)
        cy.clearLocalStorage()
        cy.get('#form-addOption').submit()
        cy.contains( 'Sorry, that is not a valid entry')
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
        cy.contains('Sorry, that is not a valid entry' )
            .should('not.be.true')

    })
})

describe('Test options', () => {
    it('every option has a remove button', () => {
        cy.visit(target_url)
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
        cy.visit(target_url)
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
        cy.contains(input2).should('not.exist')
        cy.contains(input1).should('exist')
        cy.contains(input3).should('exist')

    })



    it('"Remove all" works', () => {
        cy.visit(target_url)
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

    it('Option Modal works', () => {
        cy.visit(target_url)
        cy.clearLocalStorage()
        cy.get('#input-addOption').type(input1)
        cy.get('#form-addOption').submit()
        cy.get('#input-addOption').type(input2)
        cy.get('#form-addOption').submit()
        cy.get('#input-addOption').type(input3)
        cy.get('#form-addOption').submit()
        cy.contains(input1)
        cy.contains(input2)
        cy.contains(input3)

        cy.get('#what-do').click()
        cy.contains('Selected Option')
        cy.get('#picked-option')
            .should(($p) => {
                    const text = $p.text();

                    expect(text)
                        .to.be.oneOf(inputs)
                }
            )

        cy.get('#closeModal')
            .contains("Okay")
            .click()
        cy.contains('Selected Option')
            .should('not.exist')
        cy.get('#closeModal')
            .should('not.exist')


    })

    it('Option Modal closes with ESC or clicking background',() => {
        cy.visit(target_url)
        cy.clearLocalStorage()
        cy.get('#input-addOption').type(input1)
        cy.get('#form-addOption').submit()

        cy.get('#what-do').click()

        cy.contains('Selected Option')
            .type('{esc}')

        cy.contains('Selected Option')
            .should('not.exist')
        cy.get('#closeModal')
            .should('not.exist')


        cy.get('#what-do').click()
        cy.get('body').click('right')
        cy.contains('Selected Option')
            .should('not.exist')
        cy.get('#closeModal')
            .should('not.exist')

    })

})


