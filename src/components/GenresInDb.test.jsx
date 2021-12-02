import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent, act} from '@testing-library/react'

import {server} from "../mocks/browser"
import {genresData} from "../mocks/handlers";
import GenresInDb from "./GenresInDb"

let component;
beforeEach(() => {
    component = render(<GenresInDb/>)
})


describe("Testing initial state of the component", () => {

    it('GenresInDb is rendered', () => {

        expect(component.container).toBeDefined()
    })

    it('GenresInDb is rendered with a title "Genres in Data Base"', () => {
        let genresTitle = component.getByText("Genres in Data Base")
        expect(genresTitle).toBeDefined()
    })

    it('GenresInDb is initially rendered without any genres', () => {
        // Act
        let genresRow = component.container.querySelector('.row')
        expect(genresRow).toBeEmptyDOMElement()
    })

})


describe("Testing component updates", () => {
    beforeAll(() => {
        server.listen()
    })

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    it("Should update state, show all genres actives in request and hide no active genres", async () => {
        await act(() => sleep(500))

        genresData.data.forEach(genre => {

            let genresTitle = component.queryByText(genre.name)
            if (genre.active)
                expect(genresTitle).toBeInTheDocument()
            else
                expect(genresTitle).not.toBeInTheDocument()
        })
    })

    it("Add class bg-secondary to genres on hover", async () => {
        await act(() => sleep(500))

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
