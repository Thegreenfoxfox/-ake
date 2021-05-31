
const numberofFilms =+prompt('Сколько фильмов вы уже посмотрели?','');
const personalMovieDB = {
    count:numberofFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

for (let i=0; i<2; i++)
{   const a = prompt('Один из последних просмотренных фильмов',''),
    b = prompt('На сколько оцените его?','');
    personalMovieDB.movies[a] = b;
}
console.log(personalMovieDB);
