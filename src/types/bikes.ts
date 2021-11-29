export interface Bike {
  id: number;
  title: string | null;
  date_stolen: number;
  description: string | null;
  frame_colors: string[];
  tistolen_locationtle: string | null;
  large_img: string | null;
  frame_model: string | null;
  is_stock_img: boolean;
  location_found: string | null;
  manufacturer_name: string | null;
  external_id: number | null;
  registry_name: string | null;
  registry_url: string | null;
  serial: string | null;
  status: string | null;
  stolen: boolean;
  stolen_location: string | null;
  thumb: string | null;
  url: string | null;
  year: number | null;
}

export interface BikeDetail extends Bike {
  registration_created_at: number | null;
  registration_updated_at: number | null;
  api_url: string | null;
  manufacturer_id: number | null;
  paint_description: null;
  name: string | null;
  frame_size: string | null;
  rear_tire_narrow: boolean;
  front_tire_narrow: string | null;
  type_of_cycle: string | null;
  test_bike: boolean;
  rear_wheel_size_iso_bsd: string | null;
  front_wheel_size_iso_bsd: string | null;
  handlebar_type_slug: string | null;
  frame_material_slug: string | null;
  front_gear_type_slug: string | null;
  rear_gear_type_slug: string | null;
  additional_registration: string | null;
  stolen_record: StolenRecord;
  public_images: PublicImage[];
  components: []
}

interface StolenRecord {
  date_stolen: number | null;
  location: string | null;
  latitude: number | null;
  longitude: number | null;
  theft_description: string | null;
  locking_description: string | null;
  lock_defeat_description: string | null;
  police_report_number: number | null;
  police_report_department: string | null;
  created_at: number | null;
  create_open311: boolean;
  id: number | null
}

interface PublicImage {
  name: string | null;
  full: string | null;
  large: string | null;
  medium: string | null;
  thumb: string | null;
  id: number | null
}