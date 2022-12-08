const funcaoParaTeste = ()=>{
  cy.get('#text2').type('inatel')
  cy.get('#text4').type('inatel')
  cy.get('#text3').type('inatel')
  cy.get('#opcao').select(1)
  cy.get('#cursoPretendido').select(1)
  cy.get('#turno').select(1)
  cy.get('#curso-de-origem').type('inatel')
  cy.get('#instituicao-de-origem').type('inatel')
  cy.get('#receber-comunicacoes-inatel').click()
  cy.get('#button10').click()
}

describe('inatel teste', () => {
  it('entrar no site inatel e checkar saiba mais de graduação', () => {
    cy.visit('https://inatel.br/home/')
    cy.get('#contract-1 > .policyMessage > .actionUser > .acceptCookie').click()
    cy.get('.modal-footer > .btn').click()
    cy.get('#dropbtn > .fa').click()
    cy.get(':nth-child(1) > .scroll-link').click()
    cy.get('.wowN > .fixaBottom > .saibaMais').should('contain.text', 'Saiba mais')
  })


  it('entrar no site inatel vestibular e checkar saiba mais de bolsa', () => {
    cy.visit('https://inatel.br/vestibular/')
    cy.get('[href="/vestibular/matriculas"]').click()
    cy.get(':nth-child(1) > .color000').should('contain.text', "DOCUMENTAÇÃO E VALORES")
  })

  it('entrar no site inatel vestibular receber alert quando entrar sem nada', () => {
    cy.visit('https://siteseguro.inatel.br/GestaoIngressante/Conta/Login')
    cy.get('#btnVerificarTipoEmail').click()
    cy.on('window:alert',(t)=>{
      //assertions
      expect(t).to.contains('Digite seu email.');
    })
  })

  it('entrar no site inatel vestibular digitar tudo mas nao ter email valido', () => {
    cy.visit('https://inatel.br/vestibular/transferencia-e-portador-de-diploma')
    funcaoParaTeste()
    cy.get('.gvalidation-error-text').should('contain.text','Introduza um email valido: p.e. n...@dominio.pt')
  })

  it('entrar no site inatel vestibular mas nao tem nenhum campo valido', () => {
    cy.visit('https://inatel.br/vestibular/transferencia-e-portador-de-diploma')
    cy.get('#button10').click()
    cy.get('.gvalidation-error-text').should('contain.text','Campo Obrigatório.')
  })

  it('entrar no site inatel vestibular mas nao tem nenhum campo valido apos nao ter email', () => {
    cy.visit('https://inatel.br/vestibular/transferencia-e-portador-de-diploma')
    cy.get('#text2').type('inatel')
    cy.get('#text4').type('inatel')
    cy.get('#text4').clear()

    cy.get('#button10').click()
    cy.get('.gvalidation-error-text').should('contain.text','Campo Obrigatório.')
  })
})