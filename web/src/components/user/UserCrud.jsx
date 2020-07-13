import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Cartas',
    subtitle: 'Tela de manutenção para cartas'
}

const baseUrl = 'http://localhost:3001/cards'
const initialState = {
    card: { name: '', description: '', attack: '', defense: '', sort: '', group: '' },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ card: initialState.card })
    }

    save() {
        const card = this.state.card
        const method = card.id ? 'put' : 'post'
        const url = card.id ? `${baseUrl}/${card.id}` : baseUrl
        axios[method](url, card)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ card: initialState.card, list })
            })
    }

    getUpdatedList(card, add = true) {
        const list = this.state.list.filter(u => u.id !== card.id)
        if (add) list.unshift(card)
        return list
    }

    updateField(event) {
        const card = { ...this.state.card }
        card[event.target.name] = event.target.value
        this.setState({ card })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.card.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Descrição</label>
                            <input type="text" className="form-control"
                                name="description"
                                value={this.state.card.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite a descrição" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Ataque</label>
                            <input type="text" className="form-control"
                                name="attack"
                                value={this.state.card.attack}
                                onChange={e => this.updateField(e)}
                                placeholder="Informe o ataque" />
                        </div>
                    </div>


                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Defesa</label>
                            <input type="text" className="form-control"
                                name="defense"
                                value={this.state.card.defense}
                                onChange={e => this.updateField(e)}
                                placeholder="Informe a defesa" />

                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Classe</label>
                            <select type="text" className="form-control"
                                name="sort"
                                value={this.state.card.sort}
                                onChange={e => this.updateField(e)}>
                                <option value="0">Selecione a classe</option>
                            </select>

                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Tipo</label>
                            <select type="enum" className="form-control"
                                name="type"
                                value={this.state.card.group}
                                onChange={e => this.updateField(e)}>
                                <option value="0">Selecione o tipo</option>
                            </select>

                        </div>
                    </div>

                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(card) {
        this.setState({ card })
    }

    remove(card) {
        axios.delete(`${baseUrl}/${card.id}`).then(resp => {
            const list = this.getUpdatedList(card, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(card => {
            return (
                <tr key={card.id}>
                    <td>{card.id}</td>
                    <td>{card.name}</td>
                    <td>{card.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(card)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(card)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}