import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react'
import {genresData} from "../mocks/handlers";
import GenresInDb from "./GenresInDb"
import {MemoryRouter} from "react-router-dom";


describe("Testing initial state of the component", () => {
    let component;
    beforeEach(() => {
        component = render(<MemoryRouter><GenresInDb /></MemoryRouter>)
    })

    afterEach(()=> component.unmount())

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


describe("Testing component with data", () => {

    let component;
    beforeEach(() => {
        component = render(<MemoryRouter><GenresInDb genres={genresData.data}/></MemoryRouter>)
    })

    afterEach(() => component.unmount())

    it("should display all genres actives in props and hide no active genres", async () => {
        genresData.data.forEach(genre => {
            let genresTitle = component.queryByText(genre.name)
            if (genre.active)
                expect(genresTitle).toBeInTheDocument()
            else
                expect(genresTitle).not.toBeInTheDocument()
        })
    })

    it("Add class bg-secondary to genres on hover", async () => {
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
