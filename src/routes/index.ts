import { Router, Request, Response } from 'express';
import axios from 'axios';
//import imageResizer_routes from './api/image-resizer';
type Movie = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};
const routes = Router();

routes.get('/api', (req: Request, res: Response) => {
  res.send('Welcome to TransformUs');
});

routes.get('/api/people', async (req: Request, res: Response) => {
  try {
    const apiRes = await axios.get('https://swapi.dev/api/people/');
    res.send(apiRes.data.results);
  } catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
});

routes.get('/api/people/name', async (req: Request, res: Response) => {
  const name = req.query.name as string;
  try {
    const apiRes = await axios.get('https://swapi.dev/api/people/');
    let allpepole = apiRes.data.results;
    let actor: string[] = [];
    for (let i = 0; i < allpepole.length; i++) {
      if (allpepole[i].name.toLowerCase() === name.toLocaleLowerCase()) {
        actor = [allpepole[i]];
        break;
      }
    }
    res.send(actor);
  } catch (err) {
    console.log(err);
    res.status(500).send('actor not found');
  }
});

routes.get('/api/movies', async (req: Request, res: Response) => {
  try {
    const apiRes = await axios.get('https://swapi.dev/api/films/');
    res.send(apiRes.data.results);
  } catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
});

routes.get('/api/movies/title', async (req: Request, res: Response) => {
  const movieName = req.query.movieName as string;
  try {
    const apiRes = await axios.get('https://swapi.dev/api/films');
    let allMovies = apiRes.data.results;
    let getMovieByName: Movie[] = [];
    for (let i = 0; i < allMovies.length; i++) {
      if (allMovies[i].title.toLowerCase() === movieName.toLowerCase()) {
        getMovieByName = [allMovies[i]];
        break;
      }
    }
    let cast: string[] = [];
    for (let i = 0; i < getMovieByName?.[0].characters.length; i++) {
      const castName: string = await (
        await axios.get(getMovieByName?.[0].characters[i])
      ).data.name;
      cast.push(castName);
    }

    let movieByNameWithCast = [...getMovieByName, cast];
    res.send(movieByNameWithCast);
  } catch (err) {
    console.log(err);
    res.status(500).send('movie not found');
  }
});

export default routes;
