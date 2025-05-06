fn main() {
  let str: String = String:: from("sahil");
  let len: usize = get_length(str);

  print!("{}", len);

  get_length(str)
}


fn get_length(str: String) -> usize {
    return str.len();
}
