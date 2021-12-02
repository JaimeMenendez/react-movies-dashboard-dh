import { rest } from 'msw'

export const genresData = {
    "meta": {
        "status": 200,
        "total": 12,
        "url": "api/genres"
    },
    "data": [
        {
            "id": 1,
            "name": "Comedia",
            "ranking": 1,
            "active": false,
            "created_at": "2016-07-04T03:00:00.000Z",
            "updated_at": null
        },
        {
            "id": 2,
            "name": "Terror",
            "ranking": 2,
            "active": true,
            "created_at": "2014-07-04T03:00:00.000Z",
            "updated_at": null
        },
        {
            "id": 3,
            "name": "Drama",
            "ranking": 3,
            "active": true,
            "created_at": "2013-07-04T03:00:00.000Z",
            "updated_at": null
        },
        {
            "id": 4,
            "name": "Accion",
            "ranking": 4,
            "active": true,
            "created_at": "2011-07-04T03:00:00.000Z",
            "updated_at": null
        },
        {
            "id": 5,
            "name": "Ciencia Ficcion",
            "ranking": 5,
            "active": true,
            "created_at": "2010-07-04T03:00:00.000Z",
            "updated_at": null
        },
        {
            "id": 6,
            "name": "Suspenso",
            "ranking": 6,
            "active": true,
            "created_at": "2013-07-04T03:00:00.000Z",
            "updated_at": null
        },
        {
            "id": 7,
            "name": "Animacion",
            "ranking": 7,
            "active": true,
            "created_at": "2005-07-04T03:00:00.000Z",
            "updated_at": null
        },
        {
            "id": 8,
            "name": "Aventuras",
            "ranking": 8,
            "active": true,
            "created_at": "2003-07-04T03:00:00.000Z",
            "updated_at": null
        },
        {
            "id": 9,
            "name": "Documental",
            "ranking": 9,
            "active": true,
            "created_at": "2008-07-04T03:00:00.000Z",
            "updated_at": null
        },
        {
            "id": 10,
            "name": "Infantiles",
            "ranking": 10,
            "active": true,
            "created_at": "2013-07-04T03:00:00.000Z",
            "updated_at": null
        },
        {
            "id": 11,
            "name": "Fantasia",
            "ranking": 11,
            "active": true,
            "created_at": "2011-07-04T03:00:00.000Z",
            "updated_at": null
        },
        {
            "id": 12,
            "name": "Musical",
            "ranking": 12,
            "active": true,
            "created_at": "2013-07-04T03:00:00.000Z",
            "updated_at": null
        }]}

export const handlers = [
    rest.get('/api/genres', (req, res, ctx) => {
        return res(ctx.json(genresData))
    }),
]

