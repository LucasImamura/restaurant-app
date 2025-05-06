CREATE TABLE hamburger (
    id SERIAL PRIMARY KEY,
    code VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    unit_price NUMERIC(19, 2),
    image_url VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE hamburger_ingredient (
    id SERIAL PRIMARY KEY,
    hamburger_id INT NOT NULL REFERENCES hamburger(id) ON DELETE CASCADE,
    ingredient_id INT NOT NULL REFERENCES ingredient(id) ON DELETE CASCADE,
    UNIQUE (hamburger_id, ingredient_id)
);