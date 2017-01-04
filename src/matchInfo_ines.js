import React from 'react';
import MatchInfoStore from '../stores/MatchInfoStore';
import MatchInfoActions from '../actions/MatchInfoActions';

import {
    Row,
    Col,
    Nav,
    Tab,
    Icon,
    Grid,
    Table,
    Panel,
    NavItem,
    MenuItem,
    PanelLeft,
    PanelBody,
    LoremIpsum,
    PanelRight,
    PanelHeader,
    Progress,
    PanelFooter,
    NavDropdown,
    PanelContainer,
    PanelTabContainer,
} from '@sketchpixy/rubix';



class MyPanel extends React.Component {
    render() {
        return (
            <PanelTabContainer id='panel-body-header-footer-tab' defaultActiveKey="home">
            <Panel className='cor'>
                    <PanelHeader className='bg-greend fg-white'>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="home">
                                Casa
                            </NavItem>
                            <NavItem eventKey="user">
                                Fora
                            </NavItem>
                            <NavItem eventKey="cog">
                                C. Directo
                            </NavItem>
                        </Nav>
                    </PanelHeader>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Tab.Content animation={false}>
                                        <Tab.Pane eventKey="home">
                                            <p>Gráfico</p>
                                            <p>últimos jogos em casa do HomeTeam</p>
                                            <div className="row fundo">
                                                <div className="col-sm-12 top">
                                                    <table className="todo">
                                                        <tbody>
                                                            <tr className="padtr">
                                                                <td> Não ganha há.. </td>
                                                                <td className='dir'> X </td>
                                                            </tr>

                                                            <tr className="padtr">
                                                                <td> Não empata há... </td>
                                                                <td className='dir'> X </td>
                                                            </tr>
                                                            <tr className="padtr">
                                                                <td> Não perde há... </td>
                                                                <td className='dir' d> X </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="user">
                                            <p>Gráfico</p>
                                            <p>últimos jogos fora do HomeTeam</p>
                                            <div className="row fundo">
                                                <div className="col-sm-12 top">
                                                    <table className="todo">
                                                        <tbody>
                                                            <tr className="padtr">
                                                                <td> Não ganha há.. </td>
                                                                <td className='dir'> X </td>
                                                            </tr>

                                                            <tr className="padtr">
                                                                <td> Não empata há... </td>
                                                                <td className='dir'> X </td>
                                                            </tr>
                                                            <tr className="padtr">
                                                                <td> Não perde há... </td>
                                                                <td className='dir' d> X </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="cog">
                                            <table className='todo'>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home'>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home '>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home '>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home '>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home '>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                            </table>

                                            








                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                    <PanelFooter>
                    <div className="container-fluid">
                    <div className="row fundo">
                            <div className="col-sm-12 top">
                                <table className="todo">
                                    <tbody>
                                        <tr className="padtr">
                                            <td> Vitórias </td>
                                            <td className='dir'> X </td>
                                        </tr>

                                        <tr className="padtr">
                                            <td> Empates </td>
                                            <td className='dir'> X </td>
                                        </tr>
                                        <tr className="padtr">
                                            <td> Derrotas </td>
                                            <td className='dir'> X </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </div>
                    </PanelFooter>
                </Panel>
            </PanelTabContainer>
        );
    }
}
class MyPanel2 extends React.Component {
    render() {
        return (
            <PanelTabContainer id='panel-body-header-footer-tab' defaultActiveKey="home">
                <Panel className='cor'>
                    <PanelHeader className='bg-greend fg-white'>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="home">
                                Casa
                            </NavItem>
                            <NavItem eventKey="user">
                                Fora
                            </NavItem>
                            <NavItem eventKey="cog">
                                C. Directo
                            </NavItem>
                        </Nav>
                    </PanelHeader>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Tab.Content animation={false}>
                                        <Tab.Pane eventKey="home">
                                            <p>Gráfico</p>
                                            <p>últimos jogos em casa do AwayTeam</p>
                                            <div className="row fundo">
                                                <div className="col-sm-12 top">
                                                    <table className="todo">
                                                        <tbody>
                                                            
                                                            <tr className="padtr">
                                                                <td> Não ganha há.. </td>
                                                                <td className='dir'> X </td>
                                                            </tr>

                                                            <tr className="padtr">
                                                                <td> Não empata há... </td>
                                                                <td className='dir'> X </td>
                                                            </tr>
                                                            <tr className="padtr">
                                                                <td> Não perde há... </td>
                                                                <td className='dir' d> X </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="user">
                                            <p>Gráfico</p>
                                            <p>últimos jogos fora do AwayTeam</p>
                                            <div className="row fundo">
                                                <div className="col-sm-12 top">
                                                    <table className='todo'>
                                                        <tbody>
                                                        
                                                            <tr className="padtr">
                                                                <td> Não ganha há.. </td>
                                                                <td className='dir'> X </td>
                                                            </tr>

                                                            <tr className="padtr">
                                                                <td> Não empata há... </td>
                                                                <td className='dir'> X </td>
                                                            </tr>
                                                            <tr className="padtr">
                                                                <td> Não perde há... </td>
                                                                <td className='dir' d> X </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="cog">
                                            <table className='todo'>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home'>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home '>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home '>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home '>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                                <tr className='ent'>
                                                    <td className=''>29/12/16</td>
                                                    <td className=''>Taça da Liga</td>
                                                    <td className='dir home '>Braga</td>
                                                    <td className=''> Ave</td>
                                                    <td className='dir'>1-2</td>
                                                </tr>
                                            </table>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                     <PanelFooter>
                     <div className="container-fluid">
                        <div className="row fundo">
                            <div className="col-sm-12 top">
                                <table className="todo">
                                    <tbody>
                                        <tr className="padtr">
                                            <td> Vitórias </td>
                                            <td className='dir'> X </td>
                                        </tr>

                                        <tr className="padtr">
                                            <td> Empates </td>
                                            <td className='dir'> X </td>
                                        </tr>
                                        <tr className="padtr">
                                            <td> Derrotas </td>
                                            <td className='dir'> X </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </div>
                    </PanelFooter>
                </Panel>
            </PanelTabContainer>
        );
    }
}
class MyPanel3 extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      activeTab: ''
    };
  }

  handleActiveState(eventKey) {
    this.setState({
      activeTab: eventKey
    });
  }

  getItemProps(eventKey) {
    return {
      eventKey,
      active: this.state.activeTab === eventKey
    };
  }

  render() {
    return (
      <PanelTabContainer id='pills-basic' defaultActiveKey="home">
      <Panel className='cor'>
        <PanelHeader className='bg-greend fg-white'>
          <Grid>
            <Row>
              <Col sm={12}>
                <h4>Momento dos Golos</h4>
              </Col>
            </Row>
          </Grid>
        </PanelHeader>
        <PanelBody>
          <Grid>
            <Row>
              <Col sm={12}>
                <Nav bsStyle="pills" onSelect={::this.handleActiveState} className='clicmenu'>
                  <NavItem eventKey="home">Casa</NavItem>
                  <NavItem eventKey="user">Global</NavItem>
                  <NavItem eventKey="home">Fora</NavItem>
                  <NavItem eventKey="user">Global</NavItem>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="home">
                  <Grid>
                  <Row>
                    <Col xs={12} className="sempad">
                      <Table bordered striped className='table table-bordered' data-tablesaw-mode='swipe'>  
                        <tbody>
                          <tr>
                            <td rowSpan="2">0 - 15</td>
                            <td>Marcados</td>
                            <td>0</td>
                            <td className="grafgolo"><Progress label='' value={50} color='#EBA068' min={0} max={100} /></td>
                            <td rowSpan="2">0 - 15</td>
                            <td>Marcados</td>
                            <td>0</td>
                            <td className="grafgolo">Grafico</td>
                          </tr>
                          <tr>
                            <td>Sofridos</td>
                            <td>0</td>
                            <td className="grafgolo"></td>
                            <td>Sofridos</td>
                            <td>0</td>
                            <td className="grafgolo"></td>
                          </tr>
                          <tr>
                            <td rowSpan="2">16 - 30</td>
                            <td>Marcados</td>
                            <td>0</td>
                            <td className="grafgolo"></td>
                            <td rowSpan="2">16 - 30</td>
                            <td>Marcados</td>
                            <td>0</td>
                            <td className="grafgolo"></td>
                          </tr>
                          <tr>
                            <td>Sofridos</td>
                            <td>0</td>
                            <td className="grafgolo"></td>
                            <td>Sofridos</td>
                            <td>0</td>
                            <td className="grafgolo"></td>
                          </tr>
                          <tr>
                            <td rowSpan="2">31 - 45</td>
                            <td>Marcados</td>
                            <td>0</td>
                            <td className="grafgolo"></td>
                            <td rowSpan="2">31 - 45</td>
                            <td>Marcados</td>
                            <td>0</td>
                            <td className="grafgolo"></td>
                          </tr>
                          <tr>
                            <td>Sofridos</td>
                            <td>0</td>
                            <td className="grafgolo"></td>
                            <td>Sofridos</td>
                            <td>0</td>
                            <td className="grafgolo"></td>
                          </tr>
                          <tr>
                            <td rowSpan="2">46 - 60</td>
                            <td>Marcados</td>
                            <td>0</td>
                            <td></td>
                            <td rowSpan="2">46 - 60</td>
                            <td>Marcados</td>
                            <td>0</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Sofridos</td>
                            <td>0</td>
                            <td></td>
                            <td>Sofridos</td>
                            <td>0</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td rowSpan="2">61 - 75</td>
                            <td>Marcados</td>
                            <td>0</td>
                            <td></td>
                            <td rowSpan="2">61 - 75</td>
                            <td>Marcados</td>
                            <td>0</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Sofridos</td>
                            <td>0</td>
                            <td></td>
                            <td>Sofridos</td>
                            <td>0</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td rowSpan="2">76 - 90</td>
                            <td>Marcados</td>
                            <td>0</td>
                            <td></td>
                            <td rowSpan="2">76 - 90</td>
                            <td>Marcados</td>
                            <td>0</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>Sofridos</td>
                            <td>0</td>
                            <td></td>
                            <td>Sofridos</td>
                            <td>0</td>
                            <td></td>
                          </tr>




                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </Grid>
                </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Grid>
        </PanelBody>
        </Panel>
      </PanelTabContainer>
    );
  }
}

class Menu extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            activeTab: ''
        };
    }

    handleActiveState(eventKey) {
        this.setState({
            activeTab: eventKey
        });
    }

    getItemProps(eventKey) {
        return {
            eventKey,
            active: this.state.activeTab === eventKey
        };
    }

    componentDidMount() {
        $('.tablesaw').table();
    }


    render() {
        return (
            <PanelTabContainer id='panel-body-header-footer-normal-tab' defaultActiveKey="home">
                <Panel>
                    <PanelHeader className='bg-grayishcyan fg-white'>
                        <Nav bsStyle="tabs">
                            <NavItem eventKey="home">
                                Ficha de Jogo
                            </NavItem>
                            <NavItem eventKey="user">
                                Estatísticas
                            </NavItem>
                            <NavItem eventKey="cog">
                                ODDS
                            </NavItem>
                        </Nav>
                    </PanelHeader>
                    <PanelBody>
                        <Grid>
                            <Row>
                                <Col xs={12}>
                                    <Tab.Content animation={false}>
                                        <Tab.Pane eventKey="home">
                                            <div className='imagemestadio'>
                                                <h3>Imagem Estádio</h3>
                                            </div>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="user">
                                            <PanelTabContainer id='pills-basic' defaultActiveKey="home">
                                                <PanelBody>
                                                    <Grid>
                                                        <div className='row'>
                                                            <div className='col-sm-12 sempad'>
                                                    
                                                                    <Nav bsStyle="pills" onSelect={::this.handleActiveState} className='clicmenu'>

                                                                        <NavItem eventKey="home" className='col-sm-6 botao1'>Últimos 5 Jogos</NavItem>
                                                                        
                                                                        <NavItem eventKey="user" className='col-sm-6 botao2'>Próximos 5 Jogos</NavItem>
                                         
                                                                    </Nav>
                                                            </div>
                                                        </div> 
                                                        <Row>
                                                             <Col sm={12} className="sempad">
                                                            <Tab.Content>
                                                                <Tab.Pane eventKey="home">
                                                                    
                                                                        
                                                                            <div className='ola'>
                                                                                <div className='resultados'>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td className='qua'>29 DEZ '16</td>
                                                                                        <td className='competicao'>Taça da Liga</td>
                                                                                        <td>Braga</td>
                                                                                        <td className='result padr'>Rio Ave</td>
                                                                                        <td>1-2</td>
                                                                                    </tr>
                                                                                </table>
                                                                                </div>
                                                                                <div className='resultados'>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td className='qua'>22 DEZ '16</td>
                                                                                        <td className='competicao'>Primeira Liga</td>
                                                                                        <td>Chaves</td>
                                                                                        <td className='result'>Estoril</td>
                                                                                        <td className='dir'>1-0</td>
                                                                                    </tr>
                                                                                </table>
                                                                                </div>
                                                                            </div>
                                                                  
                                                                 
                                                                 
                                                                            <div className='ola'>
                                                                                <div className='resultados'>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td className='qua'>29 DEZ '16</td>
                                                                                        <td className='competicao'>Taça da Liga</td>
                                                                                        <td>Braga</td>
                                                                                        <td className='result padr'>Rio Ave</td>
                                                                                        <td>1-2</td>
                                                                                    </tr>
                                                                                    </table>
                                                                                </div>
                                                                                <div className='resultados'>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td className='qua'>22 DEZ '16</td>
                                                                                        <td className='competicao'>Primeira Liga</td>
                                                                                        <td>Chaves</td>
                                                                                        <td className='result'>Estoril</td>
                                                                                        <td className='dir'>1-0</td>
                                                                                    </tr>
                                                                                </table>
                                                                                </div>
                                                                            </div>
                                                                     
                                                               
                                                                   
                                                                            <div className='ola'>
                                                                                <div className='resultados'>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td className='qua'>29 DEZ '16</td>
                                                                                        <td className='competicao'>Taça da Liga</td>
                                                                                        <td>Braga</td>
                                                                                        <td className='result padr'>Rio Ave</td>
                                                                                        <td>1-2</td>
                                                                                    </tr>
                                                                                </table>
                                                                                </div>
                                                                                <div className='resultados'>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td className='qua'>22 DEZ '16</td>
                                                                                        <td className='competicao'>Primeira Liga</td>
                                                                                        <td>Chaves</td>
                                                                                        <td className='result'>Estoril</td>
                                                                                        <td className='dir'>1-0</td>
                                                                                    </tr>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                               
                                                             
                                                                            <div className='ola'>
                                                                                <div className='resultados'>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td className='qua'>29 DEZ '16</td>
                                                                                        <td className='competicao'>Taça da Liga</td>
                                                                                        <td>Braga</td>
                                                                                        <td className='result padr'>Rio Ave</td>
                                                                                        <td>1-2</td>
                                                                                    </tr>
                                                                                    </table>
                                                                                </div>
                                                                                <div className='resultados'>
                                                                                <table>
                                                                                    <tr>
                                                                                        <td className='qua'>22 DEZ '16</td>
                                                                                        <td className='competicao'>Primeira Liga</td>
                                                                                        <td>Chaves</td>
                                                                                        <td className='result'>Estoril</td>
                                                                                        <td className='dir'>1-0</td>
                                                                                    </tr>
                                                                                </table>
                                                                                </div>
                                                                            </div>
                                                           
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="user">
                                                                    <div className='row'>
                                                                        <div className='col-sm-12'>
                                                                            <div className='ola'>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>29 DEZ '16</td>
                                                                                        <td className='competicao'>Taça da Liga</td>
                                                                                        <td>Braga</td>
                                                                                        <td className='result padr'>Rio Ave</td>
                                                                                        <td>1-2</td>
                                                                                    </tr>
                                                                                </div>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>22 DEZ '16</td>
                                                                                        <td className='competicao'>Primeira Liga</td>
                                                                                        <td>Chaves</td>
                                                                                        <td className='result'>Estoril</td>
                                                                                        <td className='result'>1-0</td>
                                                                                    </tr>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-sm-12'>
                                                                            <div className='ola'>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>29 DEZ '16</td>
                                                                                        <td className='competicao'>Taça da Liga</td>
                                                                                        <td>Braga</td>
                                                                                        <td className='result padr'>Rio Ave</td>
                                                                                        <td>1-2</td>
                                                                                    </tr>
                                                                                </div>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>22 DEZ '16</td>
                                                                                        <td className='competicao'>Primeira Liga</td>
                                                                                        <td>Chaves</td>
                                                                                        <td className='result'>Estoril</td>
                                                                                        <td className='result'>1-0</td>
                                                                                    </tr>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className='row'>
                                                                        <div className='col-sm-12'>
                                                                            <div className='ola'>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>29 DEZ '16</td>
                                                                                        <td className='competicao'>Taça da Liga</td>
                                                                                        <td>Braga</td>
                                                                                        <td className='result padr'>Rio Ave</td>
                                                                                        <td>1-2</td>
                                                                                    </tr>
                                                                                </div>
                                                                                <div className='resultados'>
                                                                                    <tr>
                                                                                        <td className='qua'>22 DEZ '16</td>
                                                                                        <td className='competicao'>Primeira Liga</td>
                                                                                        <td>Chaves</td>
                                                                                        <td className='result'>Estoril</td>
                                                                                        <td className='result'>1-0</td>
                                                                                    </tr>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Tab.Pane>

                                                            </Tab.Content>
                                                        </Col>
                                                    </Row>
                                                    </Grid>
                                                </PanelBody>
                                                </PanelTabContainer>

                                        



                                        <div className='row'>
                                            <div className='col-sm-12'>
                                                <div className='ola'>
                                                    <div className='resultados'>
                                                        <p className='win'>V</p>
                                                        <p className='los'>D</p>
                                                        <p className='emp'>E</p>
                                                        <p className='win'>V</p>
                                                        <p className='emp'>E</p>
                                                    </div>
                                                    <div className='resultados'>
                                                        <p className='win'>V</p>
                                                        <p className='los'>D</p>
                                                        <p className='emp'>E</p>
                                                        <p className='win'>V</p>
                                                        <p className='emp'>E</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-12 ola2'>
                                                <div className='padr'>
                                                    <MyPanel />
                                                </div>

                                                <MyPanel2 />

                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-sm-12'>
                                                <p className='golos'> Golos </p>
                                                <hr className='goloslinha'></hr>
                                            </div>
                                        </div>

                                        <PanelTabContainer id='pills-basic' defaultActiveKey="home">

                                                <PanelBody>
                                                    <Grid>
                                                        <div className='row'>
                                                            <div className='col-sm-12 sempad'>
                                                    
                                                                    <Nav bsStyle="pills" onSelect={::this.handleActiveState} className='clicmenu'>

                                                                        <NavItem eventKey="home" className='col-sm-6 botao1'>Últimos 5 Jogos</NavItem>
                                                                        
                                                                        <NavItem eventKey="user" className='col-sm-6 botao2'>Próximos 5 Jogos</NavItem>
                                         
                                                                    </Nav>
                                                            </div>
                                                        </div> 
                                                                
                                                            <Tab.Content>
                                                                <Tab.Pane eventKey="home">
                                                                    
                                                                        
                                        <div className='row'>
                                            <div className='col-sm-12'>
                                                <div className='ola'>
                                                    <div className='graf'>
                                                        <div className='graf1'>
                                                            <p>Gráfico 1 Home Team</p>
                                                        </div>
                                                    </div>
                                                    <div className='graf'>
                                                        <div className='graf1'>
                                                            <p>Gráfico 1 Away Team</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-12'>
                                                <div className='ola'>
                                                    <div className='graf'>
                                                        <div className='graf1'>
                                                            <p>Gráfico 2 Home Team</p>
                                                        </div>
                                                    </div>
                                                    <div className='graf'>
                                                        <div className='graf1'>
                                                            <p>Gráfico 2 Away Team</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-12'>
                                                <div className='ola'>
                                                    <div className='graf'>
                                                        <div className='graf1'>
                                                            <p>Gráfico 3 Home Team</p>
                                                        </div>
                                                    </div>
                                                    <div className='graf'>
                                                        <div className='graf1'>
                                                            <p>Gráfico 3 Away Team</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                           
                                                                </Tab.Pane>
                                                                <Tab.Pane eventKey="user">
                                                                    <div className='row'>
                                            <div className='col-sm-12'>
                                                <div className='ola'>
                                                    <div className='graf'>
                                                        <div className='graf1'>
                                                            <p>Gráfico 1</p>
                                                        </div>
                                                    </div>
                                                    <div className='graf'>
                                                        <div className='graf1'>
                                                            <p>Gráfico 2</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-12'>
                                                <div className='ola'>
                                                    <div className='graf'>
                                                        <div className='graf1'>
                                                            <p>Gráfico 1</p>
                                                        </div>
                                                    </div>
                                                    <div className='graf'>
                                                        <div className='graf1'>
                                                            <p>Gráfico 2</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-sm-12'>
                                                <div className='ola'>
                                                    <div className='graf'>
                                                        <div className='graf1'>
                                                            <p>Gráfico 1</p>
                                                        </div>
                                                    </div>
                                                    <div className='graf'>
                                                        <div className='graf1'>
                                                            <p>Gráfico 2</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                                </Tab.Pane>

                                                            </Tab.Content>
                                                
                                                    </Grid>
                                                </PanelBody>
                                                </PanelTabContainer>

                                       
                                        
                                        <div className='row'>
                                            <div className='col-sm-12'>
                                                <div className='ola'>
                                                    <div className='casa'></div>Casa
                                                            <div className='fora'></div>Fora
                                                            <div className='global'></div>Global
                                                    </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className='col-sm-12'>
                                                <MyPanel3/>
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-sm-12'>
                                                <p className='golos'> Resultados </p>
                                                <hr className='goloslinha'></hr>
                                            </div>
                                        </div>

                                        <PanelTabContainer id='pills-basic' defaultActiveKey="home">
                                            <PanelBody>
                                                <Grid>
                                                    <Row>
                                                        <Col sm={12} className="sempad">
                                                            <Nav bsStyle="pills" onSelect={::this.handleActiveState} className='clicmenu'>
                                                                <NavItem eventKey="home">Primeira Liga</NavItem>
                                                                <NavItem eventKey="user">Últimos 10 Jogos</NavItem>
                                                            </Nav>
                                    
                                                        <Tab.Content>
                                                            <Tab.Pane eventKey="home">
                                                                <div className='row'>
                                                                    <div className='col-sm-12'>
                                                                        <div className='ola'>
                                                                            Primeira Liga_ Casa Global
                                                                         </div>  
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='col-sm-12'>
                                                                        <div className='ola'>
                                                                            Primeira Liga_ Fora Global
                                                                        </div>   
                                                                    </div>
                                                                </div>
                                                            </Tab.Pane>
                                                            <Tab.Pane eventKey="user">
                                                                <div className='row'>
                                                                    <div className='col-sm-12'>
                                                                        <div className='ola'>
                                                                            Últimos 10 Jogos_ Casa Global
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='row'>
                                                                    <div className='col-sm-12'>
                                                                        <div className='ola'>
                                                                            Últimos 10 Jogos_ Fora Global
                                                                        </div>  
                                                                    </div>
                                                                </div>
                               
                                       
                                                            </Tab.Pane>
                                                        </Tab.Content>
                                                        </Col>
                                                    </Row>
                                                </Grid>
                                            </PanelBody>
                                        </PanelTabContainer>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="cog">
                                        <h3>Cog (header)</h3>
                                        <p><LoremIpsum query='4s' /></p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="home-1">
                                        <h3>Home (footer)</h3>
                                        <p><LoremIpsum query='4s' /></p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="user-1">
                                        <h3>User (footer)</h3>
                                        <p><LoremIpsum query='4s' /></p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="cog-1">
                                        <h3>Cog (footer)</h3>
                                        <p><LoremIpsum query='4s' /></p>
                                    </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Grid>
                    </PanelBody>
                </Panel>
            </PanelTabContainer >
        );
    }
}

class MatchInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = MatchInfoStore.getState();
        this.onChange = this.onChange.bind(this);




    }

    componentDidMount() {
        MatchInfoStore.listen(this.onChange);
        MatchInfoActions.getMatchInfo(this.props.params.perma);
    }

    componentWillUnmount() {
        MatchInfoStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {

    }

    onChange(state) {
        console.log(state);
        this.setState(state);
    }

    render() {
        let isLoading = (this.state.matchInfo.homeTeam) ? false : true;

        if (isLoading) {
            return (<div><h1>Is Loading</h1></div>);
        }
        else {
            let matchInfo = this.state.matchInfo;
            console.log(matchInfo.nextGameStats);
            let gamesBetweenTeams = matchInfo.nextGameStats.gamesBetweenTeams.map((game, index) => {
                return (
                    <tr>
                        <td>{game.Date}</td>
                        <td>{game.Competicion}</td>
                        <td>{game.HomeTeam}</td>
                        <td>{game.AwayTeam}</td>
                        <td>{game.Result}</td>
                    </tr>
                );
            });

            let homeScores = matchInfo.nextGameStats.homeScores.slice(0, 5).map((game, index) => {
                return (
                    <tr>
                        <td>{game.Date}</td>
                        <td>{game.Competicion}</td>
                        <td>{game.HomeTeam}</td>
                        <td>{game.AwayTeam}</td>
                        <td>{game.Result}</td>
                    </tr>
                );
            });

            let awayScores = matchInfo.nextGameStats.awayScores.slice(0, 5).map((game, index) => {
                return (
                    <tr>
                        <td>{game.Date}</td>
                        <td>{game.Competicion}</td>
                        <td>{game.HomeTeam}</td>
                        <td>{game.AwayTeam}</td>
                        <td>{game.Result}</td>
                    </tr>
                );
            });

            let generalTable = matchInfo.nextGameStats.generalTable.map((classification, index) => {
                return (
                    <tr>
                        <td>{classification.Team}</td>
                        <td>{classification.Points}</td>
                        <td>{classification.Games}</td>
                        <td>{classification.Victories}</td>
                        <td>{classification.Draws}</td>
                        <td>{classification.Defeats}</td>
                    </tr>
                );
            });


            let goalsHome = matchInfo.nextGameStats.goalsHome.map((goals, index) => {
                return (
                    <tr>
                        <td>{goals.Desc}</td>
                        <td>{goals.Global}</td>
                        <td>{goals.Home}</td>
                        <td>{goals.Away}</td>
                    </tr>
                );
            });

            let goalsAway = matchInfo.nextGameStats.goalsAway.map((goals, index) => {
                return (
                    <tr>
                        <td>{goals.Desc}</td>
                        <td>{goals.Global}</td>
                        <td>{goals.Home}</td>
                        <td>{goals.Away}</td>
                    </tr>
                );
            });

            let homeRoad = matchInfo.nextGameStats.homeRoad.map((road, index) => {
                return (
                    <tr>
                        <td>{road.Desc}</td>
                        <td>{road.Global}</td>
                        <td>{road.Home}</td>
                        <td>{road.Away}</td>
                    </tr>
                );
            });

            let awayRoad = matchInfo.nextGameStats.awayRoad.map((road, index) => {
                return (
                    <tr>
                        <td>{road.Desc}</td>
                        <td>{road.Global}</td>
                        <td>{road.Home}</td>
                        <td>{road.Away}</td>
                    </tr>
                );
            });

            let homeTable = matchInfo.nextGameStats.homeTable.map((classification, index) => {
                return (
                    <tr>
                        <td>{classification.Order}</td>
                        <td>{classification.Team}</td>
                        <td>{classification.Points}</td>
                        <td>{classification.Games}</td>
                        <td>{classification.Victories}</td>
                        <td>{classification.Draws}</td>
                        <td>{classification.Defeats}</td>
                    </tr>
                );
            });

            let awayTable = matchInfo.nextGameStats.awayTable.map((classification, index) => {
                return (
                    <tr>
                        <td>{classification.Order}</td>
                        <td>{classification.Team}</td>
                        <td>{classification.Points}</td>
                        <td>{classification.Games}</td>
                        <td>{classification.Victories}</td>
                        <td>{classification.Draws}</td>
                        <td>{classification.Defeats}</td>
                    </tr>
                );
            });

            let homePeriodGoals = matchInfo.nextGameStats.homePeriodGoals.map((periodInfo, index) => {
                return (
                    <tr>
                        <td>{periodInfo.Desc}</td>
                        <td>{periodInfo.Goals}</td>
                        <td>{periodInfo.Period}</td>
                    </tr>
                );
            });

            let awayPeriodGoals = matchInfo.nextGameStats.awayPeriodGoals.map((periodInfo, index) => {
                return (
                    <tr>
                        <td>{periodInfo.Desc}</td>
                        <td>{periodInfo.Goals}</td>
                        <td>{periodInfo.Period}</td>
                    </tr>
                );
            });


            let homeResultsHome = matchInfo.nextGameStats.homeResultsHome.map((result, index) => {
                return (
                    <tr>
                        <td>{result.Result}</td>
                        <td>{result.Percent}</td>
                    </tr>
                );
            });

            let awayResultsAway = matchInfo.nextGameStats.awayResultsAway.map((result, index) => {
                return (
                    <tr>
                        <td>{result.Result}</td>
                        <td>{result.Percent}</td>
                    </tr>
                );
            });



            // ------------------------------------------

            return (
                <div className='container-fluid'>

                    <div className='row'>
                        <div className='col-md-12'>
                            <h3 className='titulo'>{matchInfo.homeTeam} vs {matchInfo.awayTeam}</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='conteudo'>
                                <hr className='linha' />
                                <hr className='linha2' />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='data'>
                                {matchInfo.date} ({matchInfo.hour})
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='conf'>
                                Confronto Directo - Últimos
                            </div>
                        </div>
                    </div>
                    <div className='row pad'>
                        <div className='col-sm-12'>
                            <div className='ola'>
                                <div className='imagem'>
                                    <img src={'/imgs/teams/' + matchInfo.homeTeam + '.png'} width='65%' />
                                    <div className='equipa'>
                                        {matchInfo.homeTeam}
                                    </div>
                                </div>
                                <div className='grafico2'>
                                    Gráfico Confronto Directo
                                </div>
                                <div className='imagem2'>
                                    <img src={'/imgs/teams/' + matchInfo.awayTeam + '.png'} width='65%' />
                                    <div className='equipa'>
                                        {matchInfo.awayTeam}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <Menu />
                        </div>
                    </div>















                    <div className='row'>
                        <div className='col-md-12'>
                            <h2>FIM</h2>
                            <h2 className='titulo'>{matchInfo.homeTeam} vs {matchInfo.awayTeam}</h2>
                            <p>{matchInfo.competition}</p>
                            <p>{matchInfo.date} ({matchInfo.hour})</p>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='titulo'>Home Scores</h2>
                            {homeScores}
                        </div>

                        <div className='col-md-6'>
                            <h2 className='titulo'>Away Scores</h2>
                            {awayScores}
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='titulo'>Games Between Teams</h2>
                            {gamesBetweenTeams}
                        </div>

                        <div className='col-md-6'>
                            <h2 className='titulo'>General Table</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Equipa</th>
                                        <th>Pontos</th>
                                        <th>Jogos</th>
                                        <th>Vitórias</th>
                                        <th>Empates</th>
                                        <th>Derrotas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {generalTable}
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='titulo'>Goals Home</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Global</th>
                                        <th>Home</th>
                                        <th>Away</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {goalsHome}
                                </tbody>
                            </table>
                        </div>

                        <div className='col-md-6'>
                            <h2 className='titulo'>Goals Away</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Global</th>
                                        <th>Home</th>
                                        <th>Away</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {goalsAway}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='titulo'>Home Road</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Global</th>
                                        <th>Home</th>
                                        <th>Away</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {homeRoad}
                                </tbody>
                            </table>
                        </div>

                        <div className='col-md-6'>
                            <h2 className='titulo'>Away Road</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Global</th>
                                        <th>Home</th>
                                        <th>Away</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {awayRoad}
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='titulo'>Home Table</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Equipa</th>
                                        <th>Pontos</th>
                                        <th>Jogos</th>
                                        <th>Vitórias</th>
                                        <th>Empates</th>
                                        <th>Derrotas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {homeTable}
                                </tbody>
                            </table>
                        </div>

                        <div className='col-md-6'>
                            <h2 className='titulo'>Away Table</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Equipa</th>
                                        <th>Pontos</th>
                                        <th>Jogos</th>
                                        <th>Vitórias</th>
                                        <th>Empates</th>
                                        <th>Derrotas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {awayTable}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='titulo'>Goals Home</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Golos</th>
                                        <th>Periodo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {homePeriodGoals}
                                </tbody>
                            </table>
                        </div>

                        <div className='col-md-6'>
                            <h2 className='titulo'>Goals Away</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Golos</th>
                                        <th>Periodo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {awayPeriodGoals}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='titulo'>Goals Home</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Resultado</th>
                                        <th>%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {homeResultsHome}
                                </tbody>
                            </table>
                        </div>

                        <div className='col-md-6'>
                            <h2 className='titulo'>Goals Away</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Resultado</th>
                                        <th>%</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {awayResultsAway}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            );
        }
    }
}

export default MatchInfo;