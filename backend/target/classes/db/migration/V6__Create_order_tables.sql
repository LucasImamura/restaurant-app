CREATE TABLE orders ( -- Couldn't be "order" because it's a PostgreSQL reserved word
    id SERIAL PRIMARY KEY,
    code VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    client_name VARCHAR(255) NOT NULL,
    client_address VARCHAR(255) NOT NULL,
    client_telephone VARCHAR(20) NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE order_hamburger (
    order_id INT NOT NULL,
    hamburger_id INT NOT NULL,
    PRIMARY KEY (order_id, hamburger_id),
    CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE,
    CONSTRAINT fk_hamburger FOREIGN KEY (hamburger_id) REFERENCES hamburger (id) ON DELETE CASCADE
);

CREATE TABLE order_beverage (
    order_id INT NOT NULL,
    beverage_id INT NOT NULL,
    PRIMARY KEY (order_id, beverage_id),
    CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE,
    CONSTRAINT fk_beverage FOREIGN KEY (beverage_id) REFERENCES beverage (id) ON DELETE CASCADE
);

CREATE TABLE order_observations (
    order_id INT NOT NULL,
    observation TEXT NOT NULL,
    CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE
);