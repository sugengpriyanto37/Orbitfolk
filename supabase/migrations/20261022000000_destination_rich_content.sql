alter table public.destinations
  add column if not exists weather jsonb not null default '{"headline":"A month made for living well","sun":"250+","temp":"22°C","wifi":"150 Mbps","note":"Bright days, reliable internet and plenty of room to slow down."}'::jsonb,
  add column if not exists gallery jsonb not null default '[]'::jsonb,
  add column if not exists city_images jsonb not null default '[]'::jsonb,
  add column if not exists city_faqs jsonb not null default '[]'::jsonb;

update public.destinations
set
  gallery = jsonb_build_array(image_url, 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/69224727f_generated_image.png', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/7cdbc59ce_generated_image.png'),
  city_images = jsonb_build_array('https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/422efd9b7_generated_image.png', image_url, 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/f4234e033_generated_image.png', 'https://media.base44.com/images/public/6ad71a5761ac4f502adba02d/69224727f_generated_image.png'),
  city_faqs = jsonb_build_array(jsonb_build_object('q', 'What’s included in the price?', 'a', 'Your room, coworking access, weekly events and on-ground support. Flights and most meals are on you.'))
where jsonb_array_length(gallery) = 0 or jsonb_array_length(city_images) = 0;
