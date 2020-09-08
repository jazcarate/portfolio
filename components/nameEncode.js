export default function encode(name) {
    return `project ${name}`.replace(' ', '-').toLowerCase();
}