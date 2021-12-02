import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent, act, waitFor, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom'
import {server} from "../mocks/browser"
import {genresData} from "../mocks/handlers";
import GenresInDb from "./GenresInDb"

// Fix problem https://github.com/testing-library/react-testing-library/issues/731
import MutationObserver from "mutation-observer";
global.MutationObserver = MutationObserver;

let component;
beforeEach(() => {
    component = render(<GenresInDb/>)
})

afterEach(()=> component.unmount())


describe("Testing initial state of the component", () => {

    it('GenresInDb is rendered', () => {
        expect(component.container).toBeDefined()
    })

    it('GenresInDb is rendered with a title "Genres in Data Base"', () => {
        let genresTitle = component.getByText("Genres in Data Base")
        expect(genresTitle).toBeDefined()
    })

    it('GenresInDb is initially rendered without any genres', () => {
        let genresRow = component.container.querySelector('.row')
        expect(genresRow).toBeEmptyDOMElement()
    })

})


describe("Testing component update", () => {
    beforeAll(() => {
        server.listen()
    })
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    it("Should update state, show all genres actives in request and hide no active genres", async () => {
        await waitFor(() =>
            {
                genresData.data.forEach(genre => {
                    let genresTitle = component.queryByText(genre.name)
                    if (genre.active)
                        expect(genresTitle).toBeInTheDocument()
                    else
                        expect(genresTitle).not.toBeInTheDocument()
                })
            }

        )
    })

    it("Add class bg-secondary to genres on hover", async () => {
        waitFor(() => {
            genresData.data.forEach(genre => {
                if (genre.active) {
                    let genresTitle = component.getByText(genre.name)
                    fireEvent.mouseEnter(genresTitle)
                    expect(genresTitle).toHaveClass("bg-secondary")
                    fireEvent.mouseLeave(genresTitle)
                    expect(genresTitle).not.toHaveClass("bg-secondary")
                }
            })
        })
    })
})
