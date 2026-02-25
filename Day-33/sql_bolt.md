## SQL:

### Task-1:

- Find the title of each film

  ```sql
  SELECT title FROM movies;

  ```

- Find the director of each film

  ```sql
  SELECT director FROM movies;

  ```

- Find the title and director of each film

```sql
  SELECT title,director FROM movies;
```

- Find the title and year of each film

  ```sql
  SELECT title,year FROM movies;

  ```

- Find all the information about each film

```sql
SELECT * FROM movies;
```

![alt text](<SQLBolt - Learn SQL - SQL Lesson 1_ SELECT queries 101 - Google Chrome 2_25_2026 4_09_56 PM.png>)

### Task-2:

- Find the movie with a row id of 6

  ```sql
  SELECT *
  FROM movies
  WHERE id=6;

  ```

- Find the movies released in the years between 2000 and 2010

```sql
SELECT *
FROM movies
WHERE year between 2000
AND 2010;
```

- Find the movies not released in the years between 2000 and 2010

```sql
 SELECT *
 FROM movies
 WHERE year
 NOT between 2000
 AND 2010;
```

- Find the first 5 Pixar movies and their release year

```sql
SELECT *
FROM movies
WHERE id<6
;
```

![alt text](<SQLBolt - Learn SQL - SQL Lesson 2_ Queries with constraints (Pt. 1) - Google Chrome 2_25_2026 5_10_29 PM.png>)

### Task-3:

- Find all the Toy Story movies

  ```sql
  SELECT * FROM movies
  WHERE Title like "Toy Story%";

  ```

- Find all the movies directed by John Lasseter
  ```sql
  SELECT * FROM movies
  WHERE director = "John Lasseter";
  ```
- Find all the movies (and director) not directed by John Lasseter
- ```sql
   SELECT * FROM movies
   WHERE director != "John Lasseter";
  ```
- Find all the WALL-\* movies
  ```sql
    SELECT * FROM movies
  WHERE Title like"WALL-_";
  ```

![alt text](image.png)

### TASK-4:

- List all directors of Pixar movies (alphabetically), without duplicates
  ```sql
  SELECT DISTINCT DIRECTOR
  FROM movies
  ORDER BY DIRECTOR;
  ```
- List the last four Pixar movies released (ordered from most recent to least)
- ```sql
    SELECT title,year
    FROM movies
    order by year DESC
    limit 4
  ;
  ```
- List the first five Pixar movies sorted alphabetically
  ```sql
  SELECT title
  FROM movies
  order by title
  limit 5;
  ```
- List the next five Pixar movies sorted alphabetically
- ```sql
  SELECT title
  FROM movies
  order by title
  limit 5 offset 5;
  ```
  ![alt text](image-1.png)
