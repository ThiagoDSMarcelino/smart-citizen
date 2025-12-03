export interface Mapper<Entity, DTO> {
  map(entity: Entity): DTO;
}
