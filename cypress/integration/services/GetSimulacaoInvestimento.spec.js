import garantirValoresContract from '../../contracts/garantirValores.contract'

describe('Get Simulação investimentos', () => {
    it('Listar simulação de investimento', () => {
        cy.allSimulacao().should((Response) => {
            expect(Response.status).to.eq(200)
            expect(Response.body).not.to.be.null
        })
    });

    it('Garantir o Retorno do investimento', () => {
        cy.allSimulacao().should((Response) =>{
            expect(Response.body.id).not.to.be.null
            return garantirValoresContract.validateAsync(Response.body.valor, Response.body.meses)            
        })
    })
});