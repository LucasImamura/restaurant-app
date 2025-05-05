CREATE TABLE beverage (
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    unit_price NUMERIC(19, 2),
    has_sugar BOOLEAN,
    image_url VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);