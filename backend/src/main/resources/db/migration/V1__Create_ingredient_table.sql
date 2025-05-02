CREATE TABLE ingredient (
    id INTEGER PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    unit_price NUMERIC(19, 2),
    can_be_extra BOOLEAN,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);