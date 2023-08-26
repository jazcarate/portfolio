export default function encode(name) {
    return name.replaceAll(' ', '-').toLowerCase();
}