# (ALBERT) ALBERT: A Lite BERT for Self-supervised Learning of Language Representations

Arxiv Link: https://arxiv.org/pdf/1909.11942.pdf

Papers with Code link: https://paperswithcode.com/paper/albert-a-lite-bert-for-self-supervised


> Lan Z, Chen M, Goodman S, Gimpel K, Sharma P, Soricut R. Albert: A lite bert for self-supervised learning of language representations. arXiv preprint arXiv:1909.11942. 2019 Sep 26.

## Summary

ALBERT modifies [BERT] by sharing parameters between layers and factorizing the embedding layer into two smaller matrices.

|Model Name.   |Parameters|Layers|Hidden|Embedding|
|--------------|----------|------|------|---------|
|ALBERT-base   |12M       |12    |768   |128      |
|ALBERT-large  |18M       |24    |1024  |128      |
|ALBERT-xlarge |60M       |24    |2048  |128      |
|ALBERT-xxlarge|235M      |12    |4096  |128      |


|Model Name      | Average  | SQuAD1.1 | SQuAD2.0 | MNLI     | SST-2    | RACE     |
|----------------|----------|----------|----------|----------|----------|----------|
|ALBERT-base     |80.1      |89.3/82.3 | 80.0/77.1|81.6      |90.3      | 64.0     |
|ALBERT-large    |82.4      |90.6/83.9 | 82.3/79.4|83.5      |91.7      | 68.5     |
|ALBERT-xlarge   |85.5      |92.5/86.1 | 86.1/83.1|86.4      |92.4      | 74.8     |
|ALBERT-xxlarge  |91.0      |94.8/89.3 | 90.2/87.4|90.8      |96.9      | 86.5     |



## Architecture Details

### Tokenization



### Embeddings for multi-segment tasks



### Positional Encoding



### Attention Mechanism




## Training Details

### Pre-training Data

### Pre-training Method

**Masked Language Modelling:**
1. Choose 15% of tokens to mask.
2. Of these tokens, replace 80% with special token [MASK], 10% with a random token from vocabulary, and 10% with the same token.
3. Train model to predict those tokens based on sentence presented to them via cross-entropy loss.



### Finetuning Data

### Finetuning Method


## Evaluation

### Evaluation Datasets

### Evaluation Results


## Author's Conclusions



