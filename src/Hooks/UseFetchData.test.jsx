import React from "react";
import {useFetchData} from "./UseFetchData";
import {renderHook, cleanup} from '@testing-library/react-hooks'
import { server } from "../mocks/browser"
import {genresData} from "../mocks/handlers";

describe("Testing useFetchData Hook with default initial state", () => {
    let initialState,finalState, initialLoading,finalLoading;
    beforeAll(async () => {
        server.listen()
        const { result, waitForNextUpdate } = renderHook(() => useFetchData("/api/genres"))
        initialState =result.current[0]
        initialLoading = result.current[1]

        await waitForNextUpdate()
        finalState = result.current[0]
        finalLoading = result.current[1]
    })

    afterEach(() => server.resetHandlers())

    afterAll(() =>{
        cleanup()
        server.close()
    })

    it("should return a defined state", async () => {
        expect(initialState).toBeDefined()
    })

    it("should return an initial state of an empty array when no arguments are given", () => {
        expect(initialState).toEqual([])
    })

    it("should return a second argument that must be defined", () => {
        expect(initialLoading).toBeDefined()
    })

    it("should return a boolean as second argument", () => {
        expect(typeof initialLoading).toBe("boolean")
    })

    it("loading should be true when component is mounted", () => {
        expect(initialLoading).toBe(true)
    })

    it("should load in state the data fetched",()=>{
        expect(finalState).toEqual(genresData.data)
    })

    it("should return a boolean as second argument", () => {
        expect(typeof finalLoading).toBe("boolean")
    })

    it("loading should be false when the data was fetched", () => {
        expect(finalLoading).toBe(false)
    })

})

describe("Testing useFetchData Hook with a given initial state", () => {
    let initialState,loadedState, initialSetState,loadedSetState, customInitialState;
    beforeAll(async () => {
        server.listen()
        customInitialState = [1,2,4,5,6,7,8,9]

        const { result, waitForNextUpdate } = renderHook(() => useFetchData("/api/genres",customInitialState))
        initialState =result.current[0]
        initialSetState = result.current[1]

        await waitForNextUpdate()
        loadedState = result.current[0]
        loadedSetState = result.current[1]
    })

    afterEach(() => server.resetHandlers())

    afterAll(() =>{
        cleanup()
        server.close()
    })

    it("should return a defined initial state", async () => {
        expect(initialState).toBeDefined()
    })

    it("should return an initial state given by the argument passed to the hook", () => {
        expect(initialState).toEqual(customInitialState)
    })

    it("should return a second argument that must be defined", () => {
        expect(initialSetState).toBeDefined()
    })

    it("should return a boolean as second argument", () => {
        expect(typeof initialSetState).toBe("boolean")
    })

    it("should load data fetched in state",()=>{
        expect(loadedState).toEqual(genresData.data)
    })

    it("should return a boolean as second argument", () => {
        expect(typeof loadedSetState).toBe("boolean")
    })

    it("reference to setState must be the same when state is updated", () => {
        expect(loadedSetState).toBe(loadedSetState)
    })

})
