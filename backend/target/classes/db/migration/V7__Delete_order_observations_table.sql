DROP TABLE IF EXISTS order_observations;

ALTER TABLE orders
ADD COLUMN observations VARCHAR(255);